import Ember from 'ember';

export default Ember.Controller.extend({
    file_name: 'data_dump.csv',
    upload_dir: 'uploads',
    max_lines: null,

    status: null,
    request: null,
    elapsed: null,
    data: null,

    enableSubmit: Ember.computed('file_name', 'upload_dir', 'max_lines', function() {
        let file_name = this.get('file_name'),
            upload_dir = this.get('upload_dir'),
            max_lines = this.get('max_lines');
        return (
            (file_name && file_name.length) &&
            (upload_dir && upload_dir.length) &&
            (max_lines === null || max_lines.length === 0 || max_lines.match(/^[1-9][0-9]+$/))
        );
    }),

    actions: {
        submit() {
            if (!this.get('enableSubmit')) {
                return;
            }
            let url = '/geolocation/import_data/',
                request = 'POST ' + url;

            this.set('request', request);
            this.set('status', 'waiting');

            let _this = this,
                start = Date.now();

            Ember.$.ajax({
                url: url,
                type: 'POST',
                data: {
                    file_name: this.get('file_name'),
                    upload_dir: this.get('upload_dir'),
                    max_lines: this.get('max_lines') || 0
                },
                success: function (data) {
                    console.log(JSON.stringify(data));
                    let diff = Date.now() - start;
                    _this.set('data', data);
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
