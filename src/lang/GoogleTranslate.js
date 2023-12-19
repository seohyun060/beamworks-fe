// GoogleTranslate.js

const GoogleTranslate = async (texts, languageCode) => {
	const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;
	const apiUrl = 'https://translation.googleapis.com/language/translate/v2';

	try {
		const response = await fetch(`${apiUrl}?key=${apiKey}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				q: texts,
				source: 'ko',
				target: languageCode,
			}),
		});
		const data = await response.json();
		const translatedList = [];
		if (data?.data?.translations?.length > 0) {
			data.data.translations.map((translation) =>
				translatedList.push(
					translation.translatedText
						.replaceAll('&#39;', "'")
						.replaceAll('&amp;', '&'),
				),
			);
			console.log(translatedList);
			return translatedList;
		} else {
			throw new Error('Invalid response from the Google Translate API');
		}
	} catch (error) {
		return [];
	}
};

export default GoogleTranslate;
