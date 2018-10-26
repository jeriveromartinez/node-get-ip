class IP {
    static load(app) {
        app.get('/', (req, res) => {
            res.json({ ips: req.ips, ip: req.ip, xreal: req.headers['x-real-ip'] || '', remote: req.connection.remoteAddress || '', forward: req.headers['x-forwarded-for'] });
        });
    }
}

module.exports = IP;