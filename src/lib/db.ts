import { firestore } from "./firebase";

export async function updateTiktok(data) {
  try {
    const docRef = firestore.collection("options").doc("tiktok");
    const res = await docRef.update({ ...data });
    return { res };
  } catch (error) {
    return { error };
  }
}

export async function getTiktok() {
  try {
    const docRef = firestore.collection("options").doc("tiktok");
    const gotDoc = await docRef.get();
    return { data: gotDoc.data() };
  } catch (error) {
    return { error };
  }
}
