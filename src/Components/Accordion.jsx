

const Accordion = () => {
	return (
		<div>
		<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl text-center font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 text-center dark:text-gray-400">If you have any additional inquiries or require further assistance, do not hesitate to contact our friendly staff.</p>
		<div className="space-y-4">
			<details className="w-full border bg-red-100 rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">What are your operating hours?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">We are open from 11:00 AM to 10:00 PM on weekdays and 11:00 AM to 11:00 PM on weekends. Please note that these hours may be subject to change on holidays or special occasions.</p>
			</details>
			<details className="w-full border bg-red-100  rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Do I need to make a reservation?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Reservations are not required, but they are recommended, especially during busy hours or for larger groups. You can easily make a reservation through our website or by calling our reservation hotline.</p>
			</details>
			<details className="w-full border bg-red-100  rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Is there a dress code at your restaurant?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">We do not have a strict dress code. You are welcome to dine with us in casual or formal attire. We want you to feel comfortable and enjoy your meal.</p>
			</details>
			<details className="w-full border bg-red-100  rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Do you offer takeout or delivery services?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes, we offer both takeout and delivery services. You can place orders online through our website or via popular food delivery platforms.</p>
			</details>
			<details className="w-full border bg-red-100  rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Can I host a private event at your restaurant?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Absolutely! We have private event spaces available for various occasions. Contact our events coordinator for more information on hosting your special event with us.</p>
			</details>
		</div>
	</div>
</section>	
		</div>
	);
};

export default Accordion;