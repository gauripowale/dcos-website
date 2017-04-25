---
title: Flink Forward in San Francisco
date: 2017-04-17
author: Elizabeth K. Joseph, Mesosphere
author_url: https://twitter.com/pleia2
category: community
description: Elizabeth K. Joseph shares streaming data trends and presentation details from the recent Flink Forward conference in San Francisco.
layout: article.jade
collection: posts
lunr: true
---

On Tuesday, April 11th, I joined my colleague Ravi Yadav at the [Flink Forward](http://flink-forward.org/) conference in San Francisco, organized by [data Artisans](https://data-artisans.com/).

The [Apache Flink](http://flink.apache.org/) community recently improved support for Apache Mesos and DC/OS in the latest release. Though there were always ways to run Flink with Mesos (and a user survey by data Artisans shows that 30% of recent poll respondents were doing just that), Flink 1.2 can now run as a Mesos framework, which makes deployments on both Mesos and DC/OS simpler.

During his opening remarks, Jamie Grier of data Artisans mentioned that Flink has really great support on Mesosphere's DC/OS and it was a real pleasure for me to see DC/OS listed as a supportive vendor. It made me really proud to be part of a project that’s helping other communities to grow by making it easier to deploy and run their technologies, like Flink, in production.

<img src="/assets/images/blog/2017-04-17_flink_forward_intro.jpg" alt="Flink Forward 2017 Introduction" />

In other morning keynotes, Netflix and Uber showcased their streaming-data journeys, which each culminated in Flink adoption.

Following the keynotes Ravi and I gave our presentation, titled [Flink Meet DC/OS: Deploying Flink at Scale](http://sf.flink-forward.org/kb_sessions/flink-meet-dcos-deploying-flink-at-scale/). At the beginning of the talk I asked the audience how familiar they were with Mesos and DC/OS, and was glad to find that they were the perfect audience for the introductory-level DC/OS presentation Ravi and I had prepared.

I started by introducing DC/OS itself, and key components like Mesos and Marathon. Ravi then gave a streaming data pipeline demonstration, and to ran through our [Flink example](https://github.com/dcos/examples/tree/master/flink), which details the simple and advanced install options with the DC/OS GUI . Finally, I highlighted some of the key features in the DC/OS 1.9 release: unified logging and metrics, along with the new pods and GPU capabilities.

<img src="/assets/images/blog/2017-04-17_flink_forward_presentation.jpg" alt="Flink Forward DC/OS presentation" />

A video of our talk is now online [here](https://www.youtube.com/watch?v=CcQ1Z4TQFQg) and slides can be found [here](https://www.slideshare.net/pleia2/flink-forward-san-francisco-2017-flink-meet-dcos).
