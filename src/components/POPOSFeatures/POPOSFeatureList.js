import React from 'react'
import POPOSFeature from './POPOSFeature'
import './POPOSFeatureList.css'

function POPOSFeatureList(props) {
	const icons = props.features.map((feature) => {
		return (
			<POPOSFeature key={feature} name={feature} />
		)
	})
	return (
		<div className="POPOSFeatureList" role="list">
			{icons}
		</div>
	)
}


export default POPOSFeatureList