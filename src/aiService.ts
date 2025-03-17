import axios from 'axios';

export async function analyzeWithAI(service: string, code: string): Promise<any> {
  const apiUrl = service === 'Grok' ? 'https://api.grok.com/analyze' : 'https://api.deepseek.com/analyze';
  try {
    const response = await axios.post(apiUrl, { code });
    return response.data;
  } catch (error) {
    console.error('Error calling AI service:', error);
    throw error;
  }
}