
//create class serie
export class Serie {
    index: number;
    name: string;
    channel: string;
    seasons: number;
    linkWebPage: string;
    linkImage: string;
    description: string;

    constructor(index: number, name: string, seasons: number, channel: string, description: string, linkWebPage: string, linkImage: string) {
        this.index = index;
        this.name = name;
        this.seasons = seasons;
        this.channel = channel;
        this.description = description;
        this.linkWebPage = linkWebPage;
        this.linkImage = linkImage;
    }
    
    getIndex() {
        return this.index;
    }
    getName() {
        return this.name;
    }
    getSeasons() {
        return this.seasons;
    }
    getchannel() {
        return this.channel;
    }
    getDescription() {
        return this.description;
    }
    getLinkWebPage() {
        return this.linkWebPage;
    }
    getLinkImage() {
        return this.linkImage;
    }
}