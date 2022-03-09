import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

export const JournalApp = () => {
	return (
		// This store will be available inside all components
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};
