import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var WelpHeaderComponent = Ember.Component.extend({
    layout: hbs`
      <div class="row">
        <div class="site-logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div class="search-form form-inline">
          <input class="form-control" type="text" placeholder="find tacos"/>
          <input class="form-control" type="text" placeholder="near des moines"/>
        </div>
      </div>
    `
});

export default WelpHeaderComponent;
