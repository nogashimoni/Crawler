
class Crawler {
    crawl(website) {
        const result = new Set();
        this._crawl_req(website, result);
        return JSON.stringify([...result]);
    }

    _crawl_req(website, result) {
        if (result.has(website)) // already saw this website. no need to go over it's children again
            return;
        const children = this._get_links(website);
        children.forEach((child => {
            result.add(child);
            this._crawl_req(child, result)
        }))
    }

    _get_links(website) {
        let res = [];
        switch (website) {
            case 'google':
                res = ['nana', 'tapuz'];
                break;
            case 'nana':
                res = [];
                break;
            case 'tapuz':
                res = [];
                break;
            default:
                res = [];
                break;
        }
        return res;
    }
}

module.exports = {Crawler}