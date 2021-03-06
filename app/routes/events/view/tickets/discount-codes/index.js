import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  templateName: 'events/view/tickets/discount-codes/list',
  model() {
    return [
      {
        'id'       : 1,
        'code'     : 'ABC',
        'url'      : 'https://eventyay.com/e/9ba7ea20/?code=ABC',
        'value'    : 1,
        'validity' : 'N/A',
        'status'   : 'Active'
      },
      {
        'id'       : 2,
        'code'     : 'FIRST50',
        'url'      : 'https://eventyay.com/e/9ba7ea20/?code=FIRST50',
        'value'    : 3,
        'validity' : 'N/A',
        'status'   : 'Active'
      }
    ];
  }
});
