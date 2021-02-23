import React from 'react';

import Layout from './layout';
import Pages from './pages';
import Messages from './components/messages'

export default function App() {
	return (
		<Layout>
			<Messages/>
			<Pages />
		</Layout>
	);
}
