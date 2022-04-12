import {Suspense, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Authentication from 'layout/Authentication';
import {Loading} from 'components';
const SignIn = lazy(() =>
  import('pages/Authentication/SignIn')
);
const SignUp = lazy(() =>
  import('pages/Authentication/SignUp')
);
const ForgetPassword = lazy(() =>
  import('pages/Authentication/ForgetPassword')
);
function Routing() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route index element={<h1>a</h1>} />
        </Route>
        <Route path='/actions' element={<Authentication />}>
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route
            path='forgot-password'
            element={<ForgetPassword />}
          />
        </Route>
        <Route path='policy' element={<h1>Police</h1>} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </Suspense>
  );
}

export default Routing;
