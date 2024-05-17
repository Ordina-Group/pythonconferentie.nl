<script>
	import TagBlock from '$lib/components/TagBlock.svelte';
</script>

<div class="z-10 w-full bg-western py-32 text-black" id="info">
	<div class="grid m-auto w-full max-w-6xl text-xl text-black">
		<div>		
			<TagBlock class="float-left max-w-lg" direction="right" extend={true} backgroundColor="north3">
				Join us for an electrifying celebration of Python programming at PyCon NL, where enthusiasts, 
				professionals, and curious minds converge to explore the endless possibilities of this dynamic 
				language. Inspired by the success of other PyCon events, but also our own previous experience 
				with organizing and hosting the Python Conference for 4 years, PyCon NL promises an unforgettable 
				experience packed with insightful talks, engaging workshops, vibrant networking opportunities, and 
				of course, plenty of food, drinks, and fun!
			</TagBlock>
		</div>
		<div>		
			<TagBlock
			class="float-right max-w-lg "
			direction="left"
			backgroundColor="north2"
			extend={true}
			>
				At PyCon NL, expect a lineup of captivating speakers who will delve into the latest trends, 
				innovations, and best practices shaping the Python landscape. Immerse yourself in a diverse array 
				of talks covering a wide range of topics, from web development and data science to machine learning 
				and artificial intelligence.
		</TagBlock></div>

		<div>		
			<TagBlock class="float-left max-w-lg" direction="right" extend={true} backgroundColor="north3">
				But PyCon NL is not just about passive learning; it's about active participation and community 
				building. Engage in hands-on workshops where you can deepen your skills, exchange ideas, and 
				collaborate with fellow Python enthusiasts. Network with industry leaders, seasoned professionals, 
				and passionate learners, forging connections that can propel your career and projects forward.
			</TagBlock>
		</div>
		<div>		
			<TagBlock
			class="float-right max-w-lg"
			direction="left"
			backgroundColor="north2"
			extend={true}
			>
				And let's not forget about the social aspect! PyCon NL is the perfect opportunity to unwind, socialize, 
				and have a great time with like-minded individuals who share your passion for Python. Whether it's during 
				coffee breaks or the evening social event, seize the chance to connect, bond, and form lasting friendships 
				within the vibrant Python community.
			</TagBlock>
		</div>
		<div>		
			<TagBlock class="float-left max-w-lg" direction="right" extend={true} backgroundColor="north3">
				So, mark your calendars, spread the word, and get ready for an unforgettable experience at PyCon NL. Together, 
				let's embrace the spirit of collaboration, knowledge sharing, and community building that defines the essence 
				of Python programming. We can't wait to see you there!
			</TagBlock>
		</div>

	<div class="clear-both" />
	</div>
</div>

