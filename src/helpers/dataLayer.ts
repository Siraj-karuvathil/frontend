declare global {
	interface Window {
		dataLayer: any;
	}
}

export interface ProductObject {
	id: string;
	name: string;
	price: string;
	brand?: string;
	cat?: string;
	variant?: string;
	position?: number;
	url: string;
}

export interface PurchaseAction {
    id: string, // Transaction ID. Required for purchases and refunds.
    affiliation: string,
    revenue: string, // Total transaction value (incl. tax and shipping)
    tax: string,
    shipping: string,
    coupon?: string,
}

/**
 * Call this function when a user clicks on a product link. This function uses the event
 * callback data layer variable to handle navigation after the ECommerce data has been sent
 * to Google Analytics.
 * @param {Object} productObj An object representing a product.
 */
export function onProductClickDataLayer(productObj: ProductObject) {
	window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    window.dataLayer.push({
		event: "productClick",
		ecommerce: {
			click: {
				// actionField: { list: "Search Results" }, // Optional list property.
				products: [
					{
						name: productObj.name, // Name or ID is required.
						id: productObj.id,
						price: productObj.price,
						brand: productObj.brand,
						category: productObj.cat,
						variant: productObj.variant,
						position: productObj.position,
					},
				],
			},
		},
		eventCallback: function () {
			// document.location = productObj.url;
		},
	});
}

export function onAddToCartDataLayer(products: ProductObject[]) {
	window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
	window.dataLayer.push({
		event: "addToCart",
		ecommerce: {
			currencyCode: "QAR",
			add: {
				// 'add' actionFieldObject measures.
				products,
			},
		},
	});
}

/**
 * A function to handle a click on a checkout button. This function uses the eventCallback
 * data layer variable to handle navigation after the ecommerce data has been sent to Google Analytics.
 */
export function onCheckoutDataLayer(products: ProductObject[], eventCallback?: () => void) {
	window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
	window.dataLayer.push({
		event: "checkout",
		ecommerce: {
			checkout: {
				actionField: { step: 1 },
				products,
			},
		},
		eventCallback: function () {
			eventCallback?.();
		},
	});
}

export function onPurchaseDataLayer(products: ProductObject[], actionField: PurchaseAction) {
	// Send transaction data with a page view if available
	// when the page loads. Otherwise, use an event when the transaction
	// data becomes available.
	window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
	window.dataLayer.push({
		ecommerce: {
			purchase: {
				actionField,
				products,
			},
		},
	});
}
