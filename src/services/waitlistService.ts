
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface WaitlistEntry {
  email: string;
  timestamp: any;
}

export const addToWaitlist = async (email: string): Promise<void> => {
  try {
    await addDoc(collection(db, 'waitlist'), {
      email,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    throw new Error('Failed to join waitlist');
  }
};
