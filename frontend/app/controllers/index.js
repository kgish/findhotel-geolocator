import Ember from 'ember';

export default Ember.Controller.extend({
    ip_address: null,

    status: null,
    request: null,
    elapsed: null,
    data: null,

    enableSubmit: Ember.computed('ip_address', function() {
        let ip_address = this.get('ip_address');
        return ip_address && ip_address.length;
    }),

    actions: {
        submit() {
            if (!this.get('enableSubmit')) {
                return;
            }
            let url = '/geolocation/ip_address/' + this.get('ip_address'),
                request = 'GET ' + url;

            this.set('request', request);
            this.set('status', 'waiting');

            let _this = this,
                start = Date.now();

            Ember.$.ajax({
                url: url,
                type: 'GET',
                data: {},
                success: function (data) {
                    console.log(JSON.stringify(data));
                    let diff = Date.now() - start;
                    _this.set('data', data.location);
                    _this.set('status', 'success');
                    _this.set('elapsed', diff);
                },
                error: function (jqxr) {
                    console.log(JSON.stringify(jqxr));
                    _this.set('data', jqxr);
                    _this.set('status', 'error');
                }
            });
        },
        retry() {
           this.set('status', null);
        }
    }
});
