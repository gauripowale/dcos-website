DC/OS 1.10 <!-- what are the highlights? -->:

- <!-- list of highlights -->



### Contents
- [What's New](#whats-new)
- [Known Issues and Limitations](#known-issues)
- [Fixed Issues](#fixed-issues)

# <a name="whats-new"></a>What's New

- Configurable Spartan upstreams for domains (dnames). You can now configure Spartan to delegate a particular domain (e.g. "\*.foo.company.com") to a particular upstream. <!-- I could use more information here -->

## Breaking Changes

### TLS is no longer enabled by default in Admin Router.
TLS 1.0 no longer meets common minimum security requirements. To use TLS 1.0, set `adminrouter_tls_1_0_enabled` to `true` in your `config.yaml` at install time. The default is `false`.

### Latest version of Marathon-LB is required for 1.10
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


# <a name="fixed-issues"></a>Issues Fixed since 1.9

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
- SPARK-266	- Cannot use spark-shell.
- KAF-334 - Unable to replace/restart kafka brokers after node restart.
- INFINITY-1784- PortsSpec/PortSpec compatibility in latest beta-elastic.
- ELASTIC-79 - Elastic package doesn't work offline.
- DCOS-15505 - Jenkins Marathon Plug-in so it does not strip out the VIP specifications.
- DCOS-15332 - DC/OS login prompt vulnerability.
- DCOS-15307 - Cannot "dcos task exec" to tasks in pods.
- DCOS-15302 - Pkgpanda redirects stderr to stdout.
- DCOS-15247 - Spartan repeatedly crashing on some nodes.
- DCOS-15044 - Metrics API returning null value for datapoint for Cassandra service.
- DCOS-14852 - Cosmos - Installed packages tab not functioning.
- DCOS-13595 - Incomplete uninstall of package kafka due to Mesos unavailability.
- DCOS-12154 - Minuteman: Failed to parse task.
- DCOS-10928 - Marathon leader election fails after OS upgrade.
- CASSANDRA-613 - Replace of Cassandra Nodes doesn't work with duplicate Hostname/IPs.
