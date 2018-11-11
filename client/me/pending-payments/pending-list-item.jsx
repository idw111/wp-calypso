/** @format */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { localize } from 'i18n-calypso';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import Button from 'components/button';

export class PendingListItem extends Component {
	onAbandon = () => {};

	render = () => {
		const {
			productName,
			paymentType,
			totalCostDisplay,
			completePaymentUrl,
			translate,
		} = this.props;

		return (
			<Card className={ 'pending-payments__list-item' }>
				<span className="pending-payments__list-item-wrapper">
					<div className="pending-payments__list-item-details">
						<div className="pending-payments__list-item-title">{ productName }</div>
						<div className="pending-payments__list-item-purchase-type">{ paymentType }</div>
						<div className="pending-payments__list-item-purchase-date">{ totalCostDisplay }</div>
						<div className="pending-payments__list-item-actions">
							<Button isPrimary={ false } href="/help/contact">
								<Gridicon icon="help" />
								<span>{ translate( 'Contact Support' ) }</span>
							</Button>
							<Button isPrimary={ false } onClick={ this.onAbandon }>
								{ translate( 'Abandon Payment' ) }
							</Button>
							<Button isPrimary={ true } href={ completePaymentUrl }>
								{ translate( 'Complete Payment' ) }
							</Button>
						</div>
					</div>
				</span>
			</Card>
		);
	};
}

PendingListItem.propTypes = {
	productName: PropTypes.string.isRequired,
	paymentType: PropTypes.string.isRequired,
	totalCostDisplay: PropTypes.string.isRequired,
	completePaymentUrl: PropTypes.string.isRequired,
};

export default localize( PendingListItem );
