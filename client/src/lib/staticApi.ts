import { ContactMessage } from "@shared/schema";

// Static implementation of contact form submission for GitHub Pages deployment
export const submitContactForm = async (data: Omit<ContactMessage, "id" | "createdAt">) => {
  try {
    // In a static site, we'll store in localStorage
    const timestamp = new Date().toISOString();
    const newMessage = {
      ...data,
      id: Date.now(),
      createdAt: timestamp
    };
    
    // Get existing messages
    const existingMessagesJSON = localStorage.getItem('contactMessages');
    const existingMessages = existingMessagesJSON ? JSON.parse(existingMessagesJSON) : [];
    
    // Add new message
    const updatedMessages = [...existingMessages, newMessage];
    
    // Save back to localStorage
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
    
    return newMessage;
  } catch (error) {
    console.error("Error saving contact message:", error);
    throw new Error("Failed to submit form. Please try again later.");
  }
};

// Static implementation for resume download
export const getResumeUrl = () => {
  // In static GitHub Pages, the resume will be in the public folder
  return "./UmeshmResume.pdf";
};