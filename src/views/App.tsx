import React, { useState, Suspense } from 'react';
import { nanoid } from 'nanoid';
import { Switch } from 'react-router-dom';
import { routes } from '../routes';
import { UserProvider } from '../context/user';

const App: React.FC= () =>  {
	const [id] = useState(nanoid);

  return (
	<div className=" bg-black min-h-screen">
    <Suspense fallback={<div className="h-screen flex justify-center items-center">Loading</div>}>
      <UserProvider>
        <Switch>
          {routes.map(({path, component, RouteType}) => (
            <RouteType
            key={id}
            path={path}
            exact
            component={component}
          />
          ))}
        </Switch>
      </UserProvider>
    </Suspense>
	</div>
	)
}

export default App;
