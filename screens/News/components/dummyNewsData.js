const dummyNewsData = {
        imageUrl: `https://cdn.vox-cdn.com/thumbor/rmLBWDzawqeTLS-e8X13lgVNBd4=/0x551:7695x4580/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23042763/Nothing__1__black_edition_closed_case.jpg`,

        title: `Bitcoin is aligned with American values, will strengthen dollar: US lawmaker`,

        body: `Dec 4 (Reuters) - Bitcoin dropped 8.4% to $49,228.82 at 20:01 GMT on Saturday, losing $4,514.87 fr its previous close. Bitcoin, the world's biggest and best-known cryptocurrency, is down 28.7% fr fromits previous close. Bitcoin, the world's biggest and best-knowncryptocurrency, is down 28.7% fro from its previous close. Bitcoin,the world's biggest and best-known cryptocurrency, is down 28.7% fro from its previous close. Bitcoin, the world's biggest and best-known cryptocurrency, is down 28.7% fro`,

        mainUrl: "https://google.com",

        source:"unknown",

        publishedBy: "Ankur Raj"
    }

const getData = () => {
    let news = [];
    let i=300;
    while(i--){
        news.push(dummyNewsData)
    }
    return news;
}

const newsData = getData()

export default newsData;