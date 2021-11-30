import GooglePayButton from '@google-pay/button-react';
import React from 'react';
 
 GooglePayButton = () => {
     return (
         <div className={"gpbutton"}>
             <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                                gateway: 'example',
                                gatewayMerchantId: 'exampleGatewayMerchantId',
                            },
                            },
                        },
                        ],
                        merchantInfo: {
                        merchantId: 'BCR2DN4TXD63NV3K',
                        merchantName: 'SW Visuals',
                        },
                        transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '1',
                        currencyCode: 'USD',
                        countryCode: 'US',
                        },
                        shippingAddressRequired: false,
                        callbackIntents: ['PAYMENT_AUTHORIZATION'],
                    }}
                    onLoadPaymentData={paymentRequest => {
                        console.log('Success', paymentRequest);
                    }}
                    onPaymentAuthorized={paymentData => {
                        console.log ('Payment Authorized Success', paymentData)
                        return {transactionState:'SUCCESS'}
                    }
                }
                    existingPaymentMethodRequired='false'
                    buttonColor='black'
                    buttonType='Pay'

                    />                                
         </div>
    )
 }
 
 export default GooglePayButton;
 