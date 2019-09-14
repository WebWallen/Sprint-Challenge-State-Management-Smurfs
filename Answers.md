1. What problem does the context API help solve?

When there are many child components and you have to pass props all the way down a long chain, this can become confusing and cumbersome.
Context API allows you to set data globally so that it can shared among many components. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is a single Javascript object that represents everything that can possibly happen within your app (i.e. all state variations). 
It's like the front desk of a hotel, from which all the other tasks such as cleaning rooms and booking a reservation would happen. 

Actions are the types of activities that can happen in an app. Continuing the hotel analogy, they are like the manager or supervisor who
dispatches instructions (actions) that are performed by the employees whenever a guest requests them. 

While actions are useful and necessary, they can't actually make any changes. Only a reducer can. So the reducer would be an employee
who is sent to supply a guest with a meal, clean towels, or needed toilitries upon a request. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is stored locally. This would be appropriate in a simple app that doesn't contain many levels -- for example, an app that contains nothing more than a "Card" and "CreateCard" component. Application state is stored globally. This is a better option when you have a complex app with many components that need to access the same state. For example, a social media app where you need to access the profile photo throughout the entire program (wall, profile, groups, event pages, and etc).


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is like a middle-man between a product supplier and provider. A good analogy would be a delivery service, i.e. a trucker who delivers goods from a warehouse to department store. Redux-thunk intercepts action creator calls and analyze the content being returned. If it's an action, it gets forwardedto the reducer. If it's a function (thunk), it is invoked along with an argument containing dispatch.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Blunt answer: context API because it's the only one I've implemented correctly all week. I might learn to appreciate Redux and Thunk later but those projects contained so many complexities that I ended up paralyzed by bugs/syntax errors and unable to concentrate on the core concepts whatsoever (I frankly have no idea how well I understand them due to this issue). 