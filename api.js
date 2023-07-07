// Assuming you have an API endpoint to fetch books data
const API_ENDPOINT = 'https://library-backend-two.vercel.app/books';
// const API_ENDPOINT = 'https://openlibrary.org/search.json?q=Comic+books&fields=*,availability&';

export const fetchBooks = async (limit) => {
  try {
    const response = await fetch(`${API_ENDPOINT}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching books');
    }
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
