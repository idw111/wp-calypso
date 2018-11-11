/** @format */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import FormButton from 'components/forms/form-button';

export class PendingListItem extends Component {
	onComplete = () => {};
	onAbandon = () => {};
	onSupport = () => {};

	render = () => {
		const { productName, paymentType, totalCostDisplay, translate } = this.props;

		return (
			<Card className={ 'pending-payments__list-item' }>
				<span className="pending-payments__list-item-wrapper">
					<div className="pending-payments__list-item-details">
						<div className="pending-payments__list-item-title">{ productName }</div>
						<div className="pending-payments__list-item-purchase-type">{ paymentType }</div>
						<div className="pending-payments__list-item-purchase-date">{ totalCostDisplay }</div>
						<div className="pending-payments__list-item-actions">
							<FormButton type="button" isPrimary={ false } onClick={ this.onSupport }>
								{ translate( 'Contact Support' ) }
							</FormButton>
							<FormButton type="button" isPrimary={ false } onClick={ this.onAbandon }>
								{ translate( 'Abandon Payment' ) }
							</FormButton>
							<FormButton type="button" isPrimary={ true } onClick={ this.onComplete }>
								{ translate( 'Complete Payment' ) }
							</FormButton>
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
};

export default localize( PendingListItem );
