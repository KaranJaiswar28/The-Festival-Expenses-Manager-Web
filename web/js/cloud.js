/* Sends every successful website donation to the same Firestore the app uses.
   Needs Firebase compat SDK scripts + config.js loaded first. No login is needed for donors;
   firestore.rules only allows a strictly shaped, create-only donation from the website. */
const Cloud = {
  ok() { return !!(window.firebase && window.FEM_FIREBASE && FEM_FIREBASE.projectId && window.FEM_MANDAL_ID); },
  db() { if (!firebase.apps.length) firebase.initializeApp(FEM_FIREBASE); return firebase.firestore(); },
  async pushDonation(d) {
    if (!d || d.status !== 'Success' || d.synced || !this.ok()) return false;
    try {
      const db = this.db(), base = db.collection('mandals').doc(FEM_MANDAL_ID), id = 'WEB-' + d.id, b = db.batch();
      b.set(base.collection('donations').doc(id), {
        receiptNo: id, donorName: String(d.name).slice(0, 80), amount: Number(d.amount), paymentMethod: d.method,
        purpose: 'Online donation', date: d.paidAt || d.createdAt, createdBy: 'Website', source: 'Website', status: 'Success'
      });
      b.set(base.collection('donationPrivate').doc(id), {
        mobile: String(d.mobile || ''), address: '', remarks: String(d.remarks || '').slice(0, 300),
        instrument: String(d.instrument || ''), txn: String(d.txn || '')
      });
      await b.commit();
      Store.update(d.id, { synced: true });
      return true;
    } catch (e) { console.warn('Cloud sync failed', e); return false; }
  },
  async syncPending() { for (const d of Store.all()) await this.pushDonation(d); }
};
