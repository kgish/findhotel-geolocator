import Ember from 'ember';


// messages: {"country_code":["can't be blank","only allows two letters"],"country":["can't be blank"],"city":["can't be blank"]}}

export function putMessages(h) {
    let result = '';
    Object.keys(h).forEach(k => {
        let m = h[k];
        Object.keys(m).forEach(key => {
            let messages = m[key];
            result += `${key}:[${messages.join(',')}]<br/>`
        });
    });
    return Ember.String.htmlSafe(result);
}

export default Ember.Helper.helper(putMessages);
