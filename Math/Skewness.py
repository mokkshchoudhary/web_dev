data = [2,3,4,5,6,7,8,9,12,40,41,15]

#measure of dispersion/spread

#1. range
r = max(data)-min(data)
print(r)

#percentile
import numpy as np
p = np.percentile(data, [0,25,50,75,100])
print(p)

#box-plot
import matplotlib.pyplot as plt
plt.boxplot(data)
#plt.show()

#variance 
v = np.var(data)
print(v)

#standard deviation

std = np.std(data)
print(std)

import statistics
vr = statistics.variance(data)
print(vr)

#measure of symmetricity/skewness 

from scipy.stats import skew 
sk = skew(data)
print(sk)

d = (2,3,5,7,11)
skd = skew(d)
print(skd)