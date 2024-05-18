# MINA :fairy_woman:

![GitHub CI](https://github.com/angeldollface/mina/actions/workflows/deno.yml/badge.svg)

***A minimal web framework for building reactive, server-side-rendered web applications. :fairy_woman:***

## ABOUT :books:

*Mina* is a minimalistic web framework to help you build reactive, server-side-rendered web applications. *Mina* exists because making Javascript framework is considered some superhuman feat. I wrote this to prove how easy this "superhuman feat" is. *Mina* is an abbreviation of the words "minimal" and "reactive". I initially wanted to call this project "MinR" but that sounds stupid. *Mina* runs on Typescript and Deno. Node.js will never, ever be supported. This repository contains *Mina's* source code. Enjoy.

## FEATURES :test_tube:

- Server-side rendering of pages.
- Zero Javascript shipped to the client.
- No build-step.
- Partial Hydration.
- Fast and simple APIs to get the job done quickly.

## HOW MINA WORKS :gear:

Every Mina app has two main parts: static components and reactive components.
Static components are supplied as-is, as HTML strings.
Reactive components are a little more complex. 

Reactive components have two main parts: the stateful data and the element the data is used in.
If your app receieves an event to update the stateful data, that change will be reflected in the HTML.
This update event is triggered via a controller. This controller has three properties:
i) the stateful data to update, ii) the function to change the state of the data, and iii) the element to trigger the update.

Both components and controllers are added to your app and the app class kees track of all the stateful data and any update events receieved.
Once the data changes and resultijg from that, the HTML, the HTML containing the stateful data is updated and sent to the client.
## USAGE :hammer:

### APIs

Coming soon!

### EXAMPLE

- 1.) Create a new Typescript file.
- 2.) Add *Mina* to your Deno project by running `deno add mina` in the same directory where your Typescript file lives.
- 3.) You can now use any of Mina's APIs in your project.
- 4.) For an example project you could use *Mina* in this manner.

```Typescript
import * as mina from 'mina';
```

- 5.) Run your fancy new webapp with this command (`your_app.ts` represents the path to your Typescript file.):

```bash
deno run --allow-net your_app.ts
```

- 6.) This will spin up a local webserver on port 8080 if not specified otherwise.
- 7.) Navigate to [http://localhost:8080](http://localhost:8080) to view your app.

## CHANGELOG :black_nib:

### Version 0.1.0

- Initial release.
- Upload to [deno.land/x](https://deno.land/x/mina).
- Upload to GitHub.

## NOTE :scroll:

- *Mina :fairy_woman:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the [DSL v1](https://github.com/angeldollface/doll-software-license).
