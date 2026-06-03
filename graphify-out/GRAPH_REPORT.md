# Graph Report - .  (2026-05-22)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 119 nodes · 113 edges · 20 communities (18 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4cfe4fa7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `expo` - 15 edges
2. `scripts` - 8 edges
3. `splash` - 4 edges
4. `compilerOptions` - 4 edges
5. `SendMessage()` - 4 edges
6. `web` - 3 edges
7. `experiments` - 3 edges
8. `adaptiveIcon` - 3 edges
9. `ValidatePhone()` - 3 edges
10. `GetPhoneExample()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `SendMessage()` --calls--> `ValidatePhone()`  [EXTRACTED]
  src/services/message.service.ts → src/utils/phone.utils.ts
- `SendMessage()` --calls--> `GetPhoneExample()`  [EXTRACTED]
  src/services/message.service.ts → src/utils/phone.utils.ts

## Communities (20 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (18): tsconfigPaths, typedRoutes, expo, assetBundlePatterns, experiments, icon, ios, name (+10 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (19): dependencies, expo, expo-checkbox, expo-constants, expo-linking, expo-router, expo-status-bar, libphonenumber-js (+11 more)

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (12): main, name, private, scripts, android, format, ios, lint (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.17
Nodes (11): { defineConfig }, expoConfig, devDependencies, @babel/core, eslint, eslint-config-prettier, prettier, prettier-plugin-tailwindcss (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.26
Nodes (6): Platform, SendMessage(), SendMessageParams, countryList, GetPhoneExample(), ValidatePhone()

### Community 5 - "Community 5"
Cohesion: 0.25
Nodes (7): compilerOptions, baseUrl, paths, strict, extends, include, @/*

### Community 6 - "Community 6"
Cohesion: 0.29
Nodes (7): foregroundImage, adaptiveIcon, android, splash, backgroundColor, image, resizeMode

### Community 8 - "Community 8"
Cohesion: 0.50
Nodes (3): config, { getDefaultConfig }, { withNativeWind }

## Knowledge Gaps
- **67 isolated node(s):** `name`, `slug`, `version`, `favicon`, `bundler` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 1` to `Community 2`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 3` to `Community 2`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `expo` connect `Community 0` to `Community 6`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **What connects `name`, `slug`, `version` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._