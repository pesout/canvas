## Canvas > Circles

### How it works
![explanation](http://raw.githubusercontent.com/pesout/canvas/master/circles/explanation.png)

#### We know
- Size of alpha (from cycle)
- Position of the center
- Main circle radius

#### We have to count
- `|x|` and `|y|`, because drawed circle center is on `[center+|x|, center+|y|]`

#### Algorithm description
- Divides 360 among the number of circles (let's call it `n`)
- Then a cycle starts
- We work with right triangle, so it's possible to use trigonometric functions (sin in our case)
- Now it counts `|x|` and `|y|` from alpha and radius (it's needed to convert degrees to radians)
 - `|y| = radius * sin(alpha)`
 - `|x| = radius * sin(180-(90+alpha))`
- Now we can draw the circle
- To `alpha` we assign `alpha + n` and the cycle can be repeated
