/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * VehicleOffer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VehicleOffer extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      amount_currency: 'amount_currency',
      amount_percentage: 'amount_percentage',
      amount_price: 'amount_price',
      amount_qualifier: 'amount_qualifier',
      applinks: 'applinks',
      body_style: 'body_style',
      cashback_currency: 'cashback_currency',
      cashback_price: 'cashback_price',
      currency: 'currency',
      dma_codes: 'dma_codes',
      downpayment_currency: 'downpayment_currency',
      downpayment_price: 'downpayment_price',
      downpayment_qualifier: 'downpayment_qualifier',
      end_date: 'end_date',
      end_time: 'end_time',
      id: 'id',
      images: 'images',
      offer_description: 'offer_description',
      offer_disclaimer: 'offer_disclaimer',
      offer_type: 'offer_type',
      price: 'price',
      sanitized_images: 'sanitized_images',
      start_date: 'start_date',
      start_time: 'start_time',
      term_length: 'term_length',
      term_qualifier: 'term_qualifier',
      title: 'title',
      trim: 'trim',
      url: 'url',
      vehicle_offer_id: 'vehicle_offer_id',
      year: 'year',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): VehicleOffer {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
