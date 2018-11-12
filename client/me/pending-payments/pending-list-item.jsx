/** @format */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { localize } from 'i18n-calypso';
import { connect } from 'react-redux';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import Button from 'components/button';
import { errorNotice, infoNotice } from 'state/notices/actions';

export class PendingListItem extends Component {
	onAbandon = () => {};

	render = () => {
		const {
			productName,
			paymentType,
			totalCostDisplay,
			completePaymentUrl,
			translate,
			onAbandonPayment,
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
							<Button isPrimary={ false } onClick={ onAbandonPayment }>
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

export default connect(
	() => ( {} ),
	( dispatch, props ) => ( {
		onAbandonPayment: () => {
			// todo:
			// dispatch( abandonPayment( props.paymentId ) );
			console.log( 'Payment abandoned' );
		},
		showInfoNotice: ( info, options ) =>
			dispatch( infoNotice( info, Object.assign( {}, options, { id: 'pending-payments-item' } ) ) ),
		showErrorNotice: ( error, options ) =>
			dispatch(
				errorNotice( error, Object.assign( {}, options, { id: 'pending-payments-item' } ) )
			),
	} )
)( localize( PendingListItem ) );
