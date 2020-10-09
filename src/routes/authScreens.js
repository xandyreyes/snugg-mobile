import Login from '../screens/Login'
import Register from '../screens/Register'
import CaptureID from '../screens/CaptureID'
import ForgotPassword from '../screens/ForgotPassword'
import ResetPassword from '../screens/ResetPassword'
import CameraCapture from '../screens/CameraCapture'
import PreviewID from '../screens/PreviewID'
import SelectSubscriptionPlan from '../screens/SelectSubscriptionPlan'

export default [
	{
		name: 'Login',
		component: Login,
		options: {
			headerShown: false
		}
	}, {
		name: 'Register',
		component: Register,
		options: {
			headerShown: false
		}
	}, {
		name: 'Capture',
		component: CaptureID,
		options: {
			headerShown: false
		}
	}, {
		name: 'ForgotPassword',
		component: ForgotPassword,
		options: {
			headerShown: false
		}
	}, {
		name: 'ResetPassword',
		component: ResetPassword,
		options: {
			headerShown: false
		}
	}, {
		name: 'CameraCapture',
		component: CameraCapture,
		options: {
			headerShown: false
		}
	}, {
		name: 'PreviewID',
		component: PreviewID,
		options: {
			headerShown: false
		}
	}, {
		name: 'SelectSubscriptionPlan',
		component: SelectSubscriptionPlan,
		options: {
			headerShown: false
		}
	}
]