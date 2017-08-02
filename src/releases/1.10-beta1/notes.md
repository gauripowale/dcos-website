# DC/OS 1.10 Beta 1

<div style="padding: 10px; border: 2px solid black; background-color: #e3e4e5;">
<h3>This beta release is for testing only and not to be used in production. It will only support new installations.</h3>
<h4>DC/OS 1.10 Beta 1 has a number of limitations that will be resolved at GA time:</h4>
<ul>
<li>Upgrades from 1.9 are not supported.</li>
<li>You must upgrade to DC/OS CLI version 0.5.3.
<br />
<ol>
<li><a href="/1.10/cli/uninstall/">Uninstall the existing CLI</a>.</li>
<li>Install version 0.5.3 using the **Install CLI** instructions in the dropdown in the upper left hand corner of the 1.10 DC/OS GUI.</li>
<br />
**Note:** CLI version 0.5.3 is not compatible with DC/OS 1.9.</li>
</ul>

<b>The following data services packages are also in beta and compatible with DC/OS 1.10</b>
<ul>
<li>Beta Cassandra. <a href="https://docs.mesosphere.com/service-docs/beta-program/beta-cassandra/v1.0.31-3.0.13-beta/">Documentation</a>. <a href="https://github.com/mesosphere/dcos-commons/releases/tag/cassandra-1.0.31-3.0.13-beta">Release Notes</a>.</li>

<li>Beta Elastic. <a href="https://docs.mesosphere.com/service-docs/beta-program/beta-elastic/v1.0.15-5.5.1-beta/">Documentation</a>. <a href="https://github.com/mesosphere/dcos-commons/releases/tag/untagged-466bafb811c900f9bd69">Release Notes</a>.</li>

<li>Beta HDFS. <a href="https://docs.mesosphere.com/service-docs/beta-program/beta-hdfs/v1.3.3-2.6.0-cdh5.11.0-beta/">Documentation</a>. <a href="https://github.com/mesosphere/dcos-commons/releases/tag/untagged-897c7d54d0100b86ca76">Release Notes</a>.</li>

<li>Beta Kafka. <a href="https://docs.mesosphere.com/service-docs/beta-program/beta-kafka/v1.1.26-0.10.1.0-beta/">Documentation</a>. <a href="https://github.com/mesosphere/dcos-commons/releases/tag/untagged-4edb1e9a15056ec5ef29">Release Notes</a>.</li>

<li>Beta Confluent-Kafka. <a href="  ">Documentation</a>. <a href="  ">Release Notes</a>.</li>

<li>Spark. <a href="  ">Documentation</a>. <a href="  ">Release Notes</a>.</li>
</ul>

<b>Try out the following new features!</b>

<ul>
<li>Increased CNI network support.</li>
<li><a href="/docs/1.10/installing/custom/node-cluster-health-check.md">Node and cluster health checks</a>.</li>
<li>Multi-cluster support in the DC/OS CLI.</li>
<li>Updated, more intuitive GUI.</li>
</ul>

Please try out the new features and updated data services. Provide any feedback through our support channel: support@mesosphere.com. <!-- or slack? -->
<!-- TODO: list of other major highlights + their docs -->
</div>


### Contents
- [What's New](#whats-new)
- [Breaking Changes](#breaking-changes)
- [Known Issues and Limitations](#known-issues)
- [Fixed Issues](#fixed-issues)

# <a name="whats-new"></a>What's New

## Marathon 1.5 integrated
- DC/OS 1.10 is integrated with the latest release of Marathon, version 1.5. Resulting breaking changes and new features are documented below. For more information about Marathon 1.5, consult the [Marathon changelog](https://github.com/mesosphere/marathon/blob/master/changelog.md). <!-- not sure if this is the best link; I don't think there are release notes yet -->

## Mesos 1.4.0 integrated
DC/OS 1.10 is is based on Mesos 1.4.0, here using master branch (pre-release) SHA 013f7e21, with over 1200 commits since the previous Mesos version. View the [changelog](https://github.com/apache/mesos/blob/master/CHANGELOG).

## Networking
- Configurable Spartan upstreams for domains (dnames).
  You can now configure Spartan to delegate a particular domain (e.g. "\*.foo.company.com") to a particular upstream. <!-- I could use more information here -->

- Increased CNI network support.
  <!-- text all about this... -->

## Provisioning
- Enhanced upgrades with pre/post flight checks.

## Health Checks
- Node and Cluster health checks.
  Write your own custom health checks or use the predefined checks to access and use information about your cluster, including available ports, Mesos agent status, and IP detect script validation. [View the documentation](/docs/1.10/installing/custom/node-cluster-health-check.md).

## CLI
- Multi-cluster support. <!-- docs? -->

## GUI
- Updated, more intuitive GUI.
    <!-- list of UI changes -->

<a name="breaking-changes"></a>
# Breaking Changes

## Upgrades not supported in 1.10 Beta 1.
Upgrades from 1.9 to 1.10 are _not supported_ in 1.10 Beta 1. Upgrades will be supported in 1.10 Beta 2.

## Marathon Networking API Changes in 1.5
The networking section of the Marathon API has changed significantly in version 1.5. Marathon can still accept requests using the 1.4 version of the API, but it will always reply with the 1.5 version of the app definition. This will break tools that consume networking-related fields of the service definition. [View the documentation](https://github.com/mesosphere/marathon/blob/2a7f22c6f34e911cec2a1365428809c12203eb34/docs/docs/upgrade/network-api-migration.md). <!-- linking to the marathon doc until I port the relevant information to the dc/os site -->

## TLS 1.0 is no longer enabled by default in Admin Router.
TLS 1.0 no longer meets common minimum security requirements. To use TLS 1.0, set `adminrouter_tls_1_0_enabled` to `true` in your `config.yaml` at install time. The default is `false`.

<!-- relevant to beta 2
## Latest version of Marathon-LB is required for 1.10
Before upgrading to 1.10, uninstall your existing Marathon-LB package and reinstall the updated version from the **Catalog** (previously known as **Universe**) in the DC/OS GUI.
-->

## REX-Ray configuration change
DC/OS 1.10 upgrades REX-Ray from v03.3. to v0.9.0 and therefore the REX-Ray configuration format has changed. If you have specified custom REX-Ray configuration in the `REX-Ray_config` parameter of your `config.yaml` file, change the parameter to `REX-Ray_config_preset: aws`.

## New flow to change the `dcos_url` and login
The new command to change your cluster URL is `dcos cluster setup <dcos_url>`. This change will break any existing tooling that uses the former command. Backwards compatibility is slated for a future patch release.

# <a name="known-issues"></a>Known Issues and Limitations

- DCOS-9444 - Task Remaining on Marathon 15.7 from guano backup. <!-- unclear from the Jira if this has been resolved or is even relevant -->
- DCOS-13762 - SDK Integration with DC/OS Folders.
- DCOS-14534 - Marathon: Verbose Server Banner.
- DCOS-14535 - Marathon GUI: Error Messages are Too Verbose.
- DCOS-14536 - UI Vulnerable to Clickjacking (aka UI Redressing).
- DCOS-15284 - Marathon Task Stuck.
- DCOS-15468 Exhibitor and Bouncer Issue in NA-2c [JPMC]. <!-- not sure this needs a note -- seems it's been resolved and I don't think I see any user-facing consequences. I left a question in the Jira -->
- DCOS-16547 - Task state does not update after the agent running it was removed from the cluster.
- DCOS-16564 - UI error message references Marathon command.
- DCOS-17219 - Marathon-LB broken in DC/OS 1.10.
- DCOS-17294 - Unable to curl (resolve) applications using Mesos DNS names.
- DCOS-17321 - Fix upgrade of Marathon-lb from 1.9-1.10.
- DCOS-17502 - AdminRouter rejecting request to install package.
- DCOS_OSS-1340 - Spartan "autoip" DNS should resolve to host IP for UCR in bridge network.
- DCOS_OSS-1486 - Metrics agent crashes when the mesos containers endpoint is missing fields.
- INFINITY-1143 - Update / Uninstall. DSE does not support rolling upgrade.
- INFINITY-1809 - [Data Svc] DC/OS Service Update / Config Update / Maintenance.
- INFINITY-2054	- Extend --replace={true|false} for <framework> CLI. <!-- this doesn't seem like a known issue? -->
- MESOS-6950 - Launching two tasks with the same Docker image simultaneously may cause a staging dir never cleaned up.
- MARATHON-7654 - Marathon cannot replace persistent tasks for rebooted hosts until the Mesos Master forgets about the old agent.

# <a name="fixed-issues"></a>Major Issues Fixed since 1.9

- DCOS-10873 - Marathon - Groups (and apps) endpoints return deprecated field.
- DCOS-10928 - Marathon leader election fails after OS upgrade.
- DCOS-11242 - Rounding issue with memory UI.
- DCOS-12154 - Minuteman: Failed to parse task.
- DCOS-13595 - Incomplete uninstall of package kafka due to Mesos unavailability.
- DCOS-14644 - Cannot use systemd socket for pkgpanda API.
- DCOS-14852 - Cosmos - Installed packages tab not functioning.
- DCOS-14872 - Filesystem corruption in dcos-ui container.
- DCOS-14886 - Updated the internal diagnostics utility (`dcos-3dt.service`).
- DCOS-15044 - Metrics API returning null value for datapoint for Cassandra service.
- DCOS-15232 - DC/OS Services UI does not expose the Service ports for a service.
- DCOS-15302 - Pkgpanda redirects stderr to stdout.
- DCOS-15307 - Cannot "dcos task exec" to tasks in pods.
- DCOS-15247 - Spartan repeatedly crashing on some nodes.
- DCOS-15332 - DC/OS login prompt vulnerability.
- DCOS-15590 - DCOS cli confirm() is not non-interactive safe.
- DCOS-15653 - Excessive log rotation for Mesos logs.
- DCOS-15914 - Support for CentOS/RHEL 7.4 with 1.9.
- DCOS-15937 - Pods do not receive SIGTERM.
- DCOS-16151 - Marathon Endpoints are not responding.
- DCOS-16588 - In 1.9, the mesos-dns component by default did not set the truncate bit in responses. This is non-conforming behavior. The new default in 1.10 will be to set the truncate bit if the response is too large to fit in a single packet and therefore gets truncated. If you do not want TCP fallback, set `mesos_dns_set_truncate_bit` to `true` in your `config.yaml` file at install time. The default is `false`. <!-- not sure if this is resolved; depends on https://jira.mesosphere.com/browse/DCOS-15771 -->
- DCOS-16725 - Marathon /ping Response Headers Changes on DC/OS 1.8.7 to 1.9.
- DCOS_OSS-839 - Upgrade script fails silently.
- DCOS_OSS-902 - Minuteman code in separate repo from navstar.
- DCOS_OSS-980 - Docker 1.12 and later breaks virtual networks.
- MESOS-5187 - The filesystem/linux isolator does not set the permissions of the host_path.
- MESOS-7057 - Consider using the relink functionality of libprocess in the executor driver.
- MESOS-7830 - Sandbox_path volume does not have ownership set correctly.
- PR 1395 - Add HTTP routing for Azure templates.
- Updated `dcos-launch`, now includes [user's guide](https://github.com/dcos/dcos/blob/master/packages/dcos-launch/extra/README.md).
