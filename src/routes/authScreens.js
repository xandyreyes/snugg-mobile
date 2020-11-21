import Login from 'src/screens/Login'
import Register from 'src/screens/Register'
import CaptureID from 'src/screens/CaptureID'
import ForgotPassword from 'src/screens/ForgotPassword'
import ResetPassword from 'src/screens/ResetPassword'
import CameraCapture from 'src/screens/CameraCapture'
import PreviewID from 'src/screens/PreviewID'
import SelectSubscriptionPlan from 'src/screens/SelectSubscriptionPlan'

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