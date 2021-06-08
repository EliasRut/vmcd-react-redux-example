const fetchProfessions = (dispatch) => {
	setTimeout(() => {
		fetch('https://api.guildwars2.com/v2/professions').then((data) => {
			return data.json();
		}).then((list) => {
			const promises = list.map((listEntry) => {
				return fetch(`https://api.guildwars2.com/v2/professions/${listEntry}`)
				.then((entry) => {
					return entry.json();
				});
			});
			Promise.all(promises).then((professionDataList) => {
				const relevantData = professionDataList.map((listEntry) => ({
					id: listEntry.id,
					icon: listEntry.icon_big,
					name: listEntry.name,
					weapons: Object.keys(listEntry.weapons)
				}));
				dispatch({type: 'API_LOADED', dataEntries: relevantData});
			});
		});
	}, 5000);
}

export default fetchProfessions;