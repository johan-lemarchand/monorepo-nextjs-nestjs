import { ContactFormData } from '../../types/contact';

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du formulaire');
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire de contact:", error);
    throw error;
  }
};
