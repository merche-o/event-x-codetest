# EventX code test

This project has for purpose to show my coding ability in order to apply for a job position at EventX

# Tech Stack

This project is using [Next.js](https://nextjs.org/) framework (a React.js framework) and Redux.
This project has been deployed using Next.js capabilities on vercel at this address: https://event-x-codetest.vercel.app/. You can also find this link in the github description.
A Docker of this app has been also created. you can find it in the [package section](https://github.com/users/merche-o/packages/container/package/event-x-codetest) of this github repository.

# Code Architecture
I decided to choose a `MVVM` architecture design. you can find the `views` in the `components` folder, the `model` in the `model` folder, I didn't need to create `viewModel` files/folder as there is no logic required for this project.
I also had to use the `redux` architecture in order to consummate the api and limit the refreshing of the view depending on the data received from the api.

# Technical challenges

This app show in *real-time* (it's actually only updated every 30secondes because of the limitation of the [*cryptonator api*](https://www.cryptonator.com/api/) ) the change of cryptocurrencies values.
I also decided to add a search function in order to filter information.

# Installation and getting started

First, install the dependencies using npm:

```bash
npm install
```
Then run the development server :
```bash
npm run dev
```

You should be now able to see the project running on [http://localhost:3000](http://localhost:3000)
