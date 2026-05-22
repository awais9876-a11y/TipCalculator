(*
#1: For the Local  host:
Open your terminal in the project folder and run:

npm install (to grab all the dependencies)

npm run dev (to fire up the local server)

For the vercel Deployed code:
https://tip-calculator-iota-three.vercel.app/ 

#2:
I choose React because of how it handles state. When you are typing in a bill amount, you want the tip and total to calculate instantly.
React's component-based structure makes lifting that state up (so the inputs and the results share the same brain) incredibly smooth..

Instead of hardcoding colors  everywhere or using a heavy framework, I mapped everything to CSS variables (like --accent and --bg). 
to it keeps the code highly readable, and if we ever decide to add a Dark Mode, we just flip those variables in one place instead of hunting
down 50 different classes..

#3
 On a 360px phone screen, everything stacks vertically in a single column. The inputs sit on top, and the results sit below. On a 1440px laptop, the layout likely 
split into a side-by-side view.You enter details on the left, and the results calculate in real-time on the right, minimizing the moment.

I used aria-describedby={error ? "bill-err" : undefined} on the inputs. If someone leaves the bill empty, it will give message so they know exactly why it failed.

#4:
Firstly I use the Gemini Canvas to get the layout of the App.
Then, I was unable to update the Bill calculation on the real time , So I asked the claude for updation of states + onchange function to the real time changing
function and it describe me about the useMemo()
Lastly I use the AI for the errors understanding..

#5:
Splitting of the bill is not exactly according to the real world scenarios.. The person will not be able to pay the 0.0034 dollars or rupees.
So it need to give the round off figures to the people . With the description that n number of people have to pay this and remaining havae to pay this..
*)
