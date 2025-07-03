import emailjs from "@emailjs/browser";
import {
  collection,
  addDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface WaitlistEntry {
  email: string;
  timestamp: Timestamp;
}

export const addToWaitlist = async (email: string): Promise<void> => {
  try {
    await addDoc(collection(db, "waitlist"), {
      email,
      timestamp: serverTimestamp(),
    });

    await sendWaitlistEmail(email);
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    throw new Error("Failed to join waitlist");
  }
};

export async function sendWaitlistEmail(email: string) {
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { user_email: email },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return { success: true, result };
  } catch (error) {
    console.error("EmailJS Error", error);
    return { success: false, error };
  }
}
