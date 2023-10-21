//create class serie
var Serie = /** @class */ (function () {
    function Serie(index, name, seasons, channel, description, linkWebPage, linkImage) {
        this.index = index;
        this.name = name;
        this.seasons = seasons;
        this.channel = channel;
        this.description = description;
        this.linkWebPage = linkWebPage;
        this.linkImage = linkImage;
    }
    Serie.prototype.getIndex = function () {
        return this.index;
    };
    Serie.prototype.getName = function () {
        return this.name;
    };
    Serie.prototype.getSeasons = function () {
        return this.seasons;
    };
    Serie.prototype.getchannel = function () {
        return this.channel;
    };
    Serie.prototype.getDescription = function () {
        return this.description;
    };
    Serie.prototype.getLinkWebPage = function () {
        return this.linkWebPage;
    };
    Serie.prototype.getLinkImage = function () {
        return this.linkImage;
    };
    return Serie;
}());
export { Serie };
