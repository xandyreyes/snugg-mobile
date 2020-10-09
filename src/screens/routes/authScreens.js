import Login from '../Login'
import Register from '../Register'
import CaptureID from '../CaptureID'
import ForgotPassword from '../ForgotPassword'
import ResetPassword from '../ResetPassword'
import CameraCapture from '../CameraCapture'
import PreviewID from '../PreviewID'
import SelectSubscriptionPlan from '../SelectSubscriptionPlan'

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