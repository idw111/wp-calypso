/** @format */

/**
 * External dependencies
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import { PendingListItem } from '../pending-list-item';

describe( 'PendingListItem', () => {
	const defaultProps = {
		translate: x => x,
		purchase: {
			siteId: '123',
			productName: 'WordPress.com Business Plan',
			paymentType: 'Soforte',
			totalCostDisplay: '$204',
		},
	};

	const wrapper = shallow( <PendingListItem { ...defaultProps } /> );

	const rules = [
		'Card.pending-payments__list-item .pending-payments__list-item-wrapper .pending-payments__list-item-details',
		'.pending-payments__list-item-details .pending-payments__list-item-title',
		'.pending-payments__list-item-details .pending-payments__list-item-purchase-type',
		'.pending-payments__list-item-details .pending-payments__list-item-purchase-date',
		'.pending-payments__list-item-details .pending-payments__list-item-actions',
	];

	rules.forEach( rule => {
		test( rule, () => {
			expect( wrapper.find( rule ) ).toHaveLength( 1 );
		} );
	} );

	// todo: Add tests for actions
} );
