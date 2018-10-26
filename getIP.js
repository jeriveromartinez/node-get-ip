class IP {
    static load(app) {
        app.get('/', (req, res) => {
            res.json({ ips: req.ips, ip: req.ip });
        });
    }
}

module.exports = IP;