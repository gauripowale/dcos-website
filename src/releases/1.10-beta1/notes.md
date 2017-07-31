DC/OS 1.10 Beta 1:

Synopsis of release here

- List of highlights here

### Contents
- [What's New](#whats-new)
- [Breaking Changes](#breaking-changes)
- [Known Issues and Limitations](#known-issues)
- [Fixed Issues](#fixed-issues)

# <a name="whats-new"></a>What's New

## Marathon 1.5 integrated
- DC/OS 1.10 is integrated with the latest release of Marathon, version 1.5. Resulting breaking changes and new features are documented below. For more information about Marathon 1.5, consult the [Marathon changelog](https://github.com/mesosphere/marathon/blob/7fd237fc19035d6e10e55448b89afad0a84dccec/changelog.md). <!-- not sure if this is the best link; I don't think there are release notes yet -->

## Networking
- Configurable Spartan upstreams for domains (dnames).
  You can now configure Spartan to delegate a particular domain (e.g. "\*.foo.company.com") to a particular upstream. <!-- I could use more information here -->

- Increased CNI network support.
  <!-- text all about this... -->

## Provisioning
- Enhanced upgrades with backup and restore, and pre/post flight checks.

## Health Checks
- Node and Cluster health checks.
  Write your own custom health checks or use the predefined checks to access and use information about your cluster, including available ports, Mesos agent status, and IP detect script validation. [View the documentation](/docs/1.10/installing/custom/node-cluster-health-check.md)

## CLI
- Multi-cluster support <!-- docs? -->

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

## Latest version of Marathon-LB is required for 1.10
Before upgrading to 1.10, uninstall your existing Marathon-LB package and reinstall the updated version.

## RexRay configuration change
DC/OS 1.10 upgrades REX-Ray from v03.3. to v0.9.0 and therefore the REX-Ray configuration format has changed. If you have specified custom REX-Ray configuration in the `rexray_config` parameter of your `config.yaml` file, change the parameter to `rexray_config_preset: aws`.

## New flow to change the `dcos_url` and login
The new command to change your cluster URL is `dcos cluster setup <dcos_url>`. This change will break any existing tooling that uses the former command. Backwards compatibility is slated for a future patch release.

# <a name="known-issues"></a>Known Issues and Limitations

- INFINITY-2054	- Extend --replace={true|false} for <framework> CLI. <!-- this doesn't seem like a known issue? -->
- DCOS-17219 - Marathon-LB broken in DC/OS 1.10.
- DCOS-15468 Exhibitor and Bouncer Issue in NA-2c [JPMC]. <!-- not sure this needs a note -- seems it's been resolved and I don't think I see any user-facing consequences. I left a question in the Jira -->
- DCOS-15284 - Marathon Task Stuck.
- DCOS-14536 - UI Vulnerable to Clickjacking (aka UI Redressing).
- DCOS-14535 - Marathon GUI: Error Messages are Too Verbose.
- DCOS-14534 - Marathon: Verbose Server Banner.
- DCOS-9444 - Task Remaining on Marathon 15.7 from guano backup. <!-- unclear from the Jira if this has been resolved or is even relevant -->
- CORE-932 - Launching two tasks with the same Docker image simultaneously may cause a staging dir never cleaned up.
- MARATHON-7654 - Marathon cannot replace persistent tasks for rebooted hosts until the Mesos Master forgets about the old agent.
- DCOS_OSS-1486 - Metrics agent crashes when the mesos containers endpoint is missing fields.
- DCOS_OSS-1340 - Spartan "autoip" DNS should resolve to host IP for UCR in bridge network.
- DCOS-17502 - AdminRouter rejecting request to install package.
- DCOS-17321 - Fix upgrade of Marathon-lb from 1.9-1.10.
- DCOS-17294 - Unable to curl (resolve) applications using Mesos DNS names.
- DCOS-16564 - UI error message references Marathon command.
- DCOS-16547 - Task state does not update after the agent running it was removed from the cluster.


# <a name="fixed-issues"></a>Major Issues Fixed since 1.9

- [DCOS-14872] - Filesystem corruption in dcos-ui container.
- [DCOS_OSS-839] - Upgrade script fails silently.
- [PR 1395] - Add HTTP routing for Azure templates.
- [DCOS-14886] - Updated the internal diagnostics utility (`dcos-3dt.service`).
- Updated `dcos-launch`, now includes [user's guide](https://github.com/dcos/dcos/blob/master/packages/dcos-launch/extra/README.md).
- [DCOS-14644] - Cannot use systemd socket for pkgpanda API.
- [DCOS_OSS-902] - Minuteman code in separate repo from navstar.
- [DCOS_OSS-980] - Docker 1.12 and later breaks virtual networks.
- DCOS-16725 - Marathon /ping Response Headers Changes on DC/OS 1.8.7 to 1.9.
- DCOS-16588 - In 1.9, the mesos-dns component by default did not set the truncate bit in responses. This is non-conforming behavior. The new default in 1.10 will be to set the truncate bit if the response is too large to fit in a single packet and therefore gets truncated. If you do not want TCP fallback, set `mesos_dns_set_truncate_bit` to `true` in your `config.yaml` file at install time. The default is `false`. <!-- not sure if this is resolved; depends on https://jira.mesosphere.com/browse/DCOS-15771 -->
- DCOS-15653 - Excessive log rotation for Mesos logs.
- DCOS-15232 - DC/OS Services UI does not expose the Service ports for a service.
- DCOS-11242 - Rounding issue with memory UI.
- DCOS-10873 - Marathon - Groups (and apps) endpoints return deprecated field.
- CORE-1194 - Ephemeral volumes not writable by non-root users.
- CORE-1081 - Agent upgrade from 1.7.4-verizon7 causes tasks to re-start.
- CORE-1062 - Chronos launching Docker container causes Mesos agent to crash.
- CORE-933 - The linux filesystem isolator should set mode and ownership for host volumes.
- DCOS-15332 - DC/OS login prompt vulnerability.
- DCOS-15307 - Cannot "dcos task exec" to tasks in pods.
- DCOS-15302 - Pkgpanda redirects stderr to stdout.
- DCOS-15247 - Spartan repeatedly crashing on some nodes.
- DCOS-15044 - Metrics API returning null value for datapoint for Cassandra service.
- DCOS-14852 - Cosmos - Installed packages tab not functioning.
- DCOS-13595 - Incomplete uninstall of package kafka due to Mesos unavailability.
- DCOS-12154 - Minuteman: Failed to parse task.
- DCOS-10928 - Marathon leader election fails after OS upgrade.
- DCOS-16151 - Marathon Endpoints are not responding.
- DCOS-15937 - Pods do not receive SIGTERM.
- DCOS-15914 - Support for CentOS/RHEL 7.4 with 1.9.
- DCOS-15590 - DCOS cli confirm() is not non-interactive safe.
