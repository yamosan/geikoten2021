import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";

import { Work } from "@/models";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

initializeApp(firebaseConfig);

const db = getFirestore();

// 投票
export async function incrementVoteCount(workId: Work["id"]): Promise<void> {
  const worksRef = collection(db, "works");
  const docRef = doc(worksRef, workId.toString());
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    updateDoc(docRef, {
      like: docSnap.data().like + 1,
    });
  } else {
    await setDoc(doc(worksRef, workId.toString()), {
      like: 1,
    });
  }
}

export async function getVoteCount(workId: Work["id"]): Promise<number> {
  const worksRef = collection(db, "works");
  const docRef = doc(worksRef, workId.toString());
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().like;
  }
}

// アクセスカウンター
export async function incrementAccessCount(): Promise<number> {
  const accessRef = collection(db, "access");
  const docRef = doc(accessRef, "count");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const newCount = docSnap.data().count + 1;
    updateDoc(docRef, {
      count: newCount,
    });
    return newCount;
  } else {
    await setDoc(docRef, {
      count: 1,
    });
    return 1;
  }
}
