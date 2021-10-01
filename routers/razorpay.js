const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
	key_id: "rzp_test_XBxSTfuh3KwPyT",
	key_secret: "5rFrHgKDk7lgwqIGQDut1EAT",
});

router.post("/pay/:rate", async (req, res) => {
	const payment_capture = 1;
	const amount = req.params.rate;
	const currency = "INR";
	const options = {
		amount: amount * 100,
		currency,
		//receipt: shortid.generate(),
		payment_capture,
	};

	try {
		const response = await razorpay.orders.create(options);
		console.log(response);
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount,
		});
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
