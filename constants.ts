import { Question } from './types';

export const TOTAL_TIME_SECONDS = 45 * 60; // 45 minutes

export const QUESTIONS: Question[] = [
  // SECTION A
  {
    id: 1,
    section: "Section A: D2C Commercial Logic & Math",
    title: "Funnel Math",
    scenario: "Your campaign generated 12,000,000 impressions.\nCTR: 1.8%\nConversion Rate (Click to Purchase): 2.4%\nAOV (Average Order Value): ₹2,400\n\nWhat is the Total Revenue?",
    options: [
      { id: "A", text: "₹5,184,000" },
      { id: "B", text: "₹1,244,160" },
      { id: "C", text: "₹12,960,000" },
      { id: "D", text: "₹12,441,600" } // Moved correct answer to D
    ],
    correctOptionId: "D",
    explanation: "Logic: Impressions × CTR = Clicks. Clicks × ConvRate = Orders. Orders × AOV = Revenue.\n\nCalculation:\n1. Clicks = 12,000,000 × 0.018 = 216,000\n2. Orders = 216,000 × 0.024 = 5,184\n3. Revenue = 5,184 × 2,400 = 12,441,600."
  },
  {
    id: 2,
    section: "Section A: D2C Commercial Logic & Math",
    title: "ROAS Calculation",
    scenario: "You spent ₹8,50,000 on Facebook Ads. You generated 1,700 conversions. The Revenue per conversion is ₹900.\n\nWhat is the ROAS (Return on Ad Spend)?",
    options: [
      { id: "A", text: "1.5" },
      { id: "B", text: "2.1" },
      { id: "C", text: "1.8" }, // Moved correct answer to C
      { id: "D", text: "0.55" }
    ],
    correctOptionId: "C",
    explanation: "Logic: ROAS = Total Revenue / Total Ad Spend.\n\nCalculation:\n1. Total Revenue = 1,700 conversions × ₹900 = ₹1,530,000.\n2. ROAS = 1,530,000 / 850,000 = 1.8."
  },
  {
    id: 3,
    section: "Section A: D2C Commercial Logic & Math",
    title: "Throughput & Backlog",
    scenario: "Your order processing system handles 320 items per minute.\nA flash sale spike increases the input load to 25,000 items per hour and sustains it for 2 hours.\n\nHow much backlog accumulates after 2 hours?",
    options: [
      { id: "A", text: "11,600 items" }, // Moved correct answer to A
      { id: "B", text: "5,800 items" },
      { id: "C", text: "None (System handles it)" },
      { id: "D", text: "15,200 items" }
    ],
    correctOptionId: "A",
    explanation: "Logic: Compare processing rate per hour vs input rate per hour.\n\nCalculation:\n1. Processing capacity = 320 items/min × 60 min = 19,200 items/hour.\n2. Input load = 25,000 items/hour.\n3. Deficit per hour = 25,000 - 19,200 = 5,800 items/hour.\n4. Total Backlog (2 hours) = 5,800 × 2 = 11,600 items."
  },
  {
    id: 4,
    section: "Section A: D2C Commercial Logic & Math",
    title: "API Limits & Throttling",
    scenario: "A 3rd-party logistics API allows 200 requests/sec.\nYour pipeline has 8 workers. Each worker sends 40 requests/sec.\nDue to a network blip, a retry policy kicks in with a 1.25x load multiplier.\n\nWhat is the result?",
    options: [
      { id: "A", text: "Pipeline runs fine (320 req/s)" },
      { id: "B", text: "Pipeline exceeds limit by 200 req/s" }, // Kept at B
      { id: "C", text: "Pipeline exceeds limit by 120 req/s" },
      { id: "D", text: "Pipeline exceeds limit by 60 req/s" }
    ],
    correctOptionId: "B",
    explanation: "Calculation:\n1. Normal Load = 8 workers × 40 req/s = 320 req/s.\n2. Retry Load = 320 req/s × 1.25 = 400 req/s.\n3. Limit = 200 req/s.\n4. Excess = 400 - 200 = 200 req/s over the limit."
  },
  {
    id: 5,
    section: "Section A: D2C Commercial Logic & Math",
    title: "Consumer Lag",
    scenario: "A Kinesis stream receives 120,000 records/minute.\nYour consumer application processes 1,700 records/second.\n\nIs the lag Increasing, Decreasing, or Stable?",
    options: [
      { id: "A", text: "Stable" },
      { id: "B", text: "Decreasing" },
      { id: "C", text: "Impossible to determine" },
      { id: "D", text: "Increasing" } // Moved correct answer to D
    ],
    correctOptionId: "D",
    explanation: "Logic: Convert both to the same unit (seconds).\n1. Input Rate = 120,000 records / 60 seconds = 2,000 records/second.\n2. Processing Rate = 1,700 records/second.\n3. Since Input (2,000) > Processing (1,700), the backlog (lag) is growing by 300 records every second."
  },
  {
    id: 6,
    section: "Section A: D2C Commercial Logic & Math",
    title: "Lead Conversion",
    scenario: "Leads: 50,000\nLead → MQL Rate: 40%\nMQL → SQL Rate: 25%\nSQL → Customer Rate: 10%\n\nHow many new customers?",
    options: [
      { id: "A", text: "500" }, // Moved correct answer to A
      { id: "B", text: "250" },
      { id: "C", text: "2,000" },
      { id: "D", text: "5,000" }
    ],
    correctOptionId: "A",
    explanation: "Calculation:\n1. MQLs = 50,000 × 0.40 = 20,000\n2. SQLs = 20,000 × 0.25 = 5,000\n3. Customers = 5,000 × 0.10 = 500."
  },
  {
    id: 7,
    section: "Section A: D2C Commercial Logic & Math",
    title: "Compounding Growth",
    scenario: "Revenue starts at ₹10,000,000. It grows 12% Month-over-Month (MoM).\n\nWhat is the revenue after 3 months?",
    options: [
      { id: "A", text: "₹13,600,000" },
      { id: "B", text: "₹13,310,000" },
      { id: "C", text: "₹14,049,280" }, // Moved correct answer to C
      { id: "D", text: "₹12,544,000" }
    ],
    correctOptionId: "C",
    explanation: "Logic: Compound Interest Formula A = P(1 + r)^t\n1. Month 1: 10M × 1.12 = 11,200,000\n2. Month 2: 11.2M × 1.12 = 12,544,000\n3. Month 3: 12.544M × 1.12 = 14,049,280"
  },
  {
    id: 8,
    section: "Section A: D2C Commercial Logic & Math",
    title: "Budget Planning (CPM)",
    scenario: "You need 14 Million impressions. The CPM (Cost Per Mille / Thousand) is ₹260.\n\nWhat is the required budget?",
    options: [
      { id: "A", text: "₹36,400,000" },
      { id: "B", text: "₹3,640,000" }, // Kept at B
      { id: "C", text: "₹2,600,000" },
      { id: "D", text: "₹364,000" }
    ],
    correctOptionId: "B",
    explanation: "Logic: CPM is cost per 1,000 impressions.\n1. Units of 1,000 = 14,000,000 / 1,000 = 14,000 units.\n2. Cost = 14,000 units × ₹260 = ₹3,640,000."
  },
  {
    id: 9,
    section: "Section A: D2C Commercial Logic & Math",
    title: "Sharding Capacity",
    scenario: "A Kinesis Stream has 4 Shards.\nEach shard supports a max write throughput of 1MB/sec.\nYour producers are sending data at 5.8MB/sec.\n\nWhat happens?",
    options: [
      { id: "A", text: "ProvisionedThroughputExceededException (Throttling) occurs." }, // Moved correct answer to A
      { id: "B", text: "Data is buffered in memory." },
      { id: "C", text: "AWS auto-scales to 6 shards instantly." },
      { id: "D", text: "The stream crashes." }
    ],
    correctOptionId: "A",
    explanation: "Total capacity = 4 shards × 1MB/s = 4MB/s. Input is 5.8MB/s. Since input > capacity, Kinesis rejects the excess requests with a ProvisionedThroughputExceededException. AWS Kinesis does not auto-scale instantly by default without specific custom autoscaling solutions."
  },
  {
    id: 10,
    section: "Section A: D2C Commercial Logic & Math",
    title: "Scale Estimation",
    scenario: "A batch job processes 2.5 Million rows in 18 minutes.\nThe new dataset is 12 Million rows. Assuming linear scaling, how long will it take?",
    options: [
      { id: "A", text: "72 minutes" },
      { id: "B", text: "54 minutes" },
      { id: "C", text: "90 minutes" },
      { id: "D", text: "86 minutes" } // Moved correct answer to D
    ],
    correctOptionId: "D",
    explanation: "1. Scaling Factor: 12M / 2.5M = 4.8x larger.\n2. Time: 18 minutes × 4.8 = 86.4 minutes.\n3. Closest answer is 86 minutes."
  },
  // SECTION B
  {
    id: 11,
    section: "Section B: Infrastructure Architecture & Troubleshooting",
    title: "Spark Optimization",
    scenario: "A large Spark join is failing with OOM (Out of Memory) errors. You notice one partition is 100x larger than the others.\n\nWhat is the best fix?",
    options: [
      { id: "A", text: "Increase Driver Memory." },
      { id: "B", text: "Salt the keys (Key Salting) to redistribute the skewed data." }, // Moved correct answer to B
      { id: "C", text: "Increase the number of executors." },
      { id: "D", text: "Switch from Parquet to Avro." }
    ],
    correctOptionId: "B",
    explanation: "This is a classic Data Skew problem. Increasing memory (vertical scaling) often fails because the skewed partition still overloads a single executor. Salting involves adding a random number to the join key to split the large partition into smaller chunks, distributing the load across the cluster."
  },
  {
    id: 12,
    section: "Section B: Infrastructure Architecture & Troubleshooting",
    title: "Kafka Debugging",
    scenario: "Consumer lag is growing. You add more consumer instances, but the processing rate does not increase.\n\nWhat is the most likely bottleneck?",
    options: [
      { id: "A", text: "The brokers are down." },
      { id: "B", text: "The Zookeeper leader is down." },
      { id: "C", text: "You have more consumers than partitions (Excess consumers are idle)." }, // Moved correct answer to C
      { id: "D", text: "Network bandwidth." }
    ],
    correctOptionId: "C",
    explanation: "In Kafka, a partition can be consumed by only ONE consumer within a specific consumer group at a time. If you have 10 partitions and start 20 consumers, 10 consumers will sit idle. To scale further, you must increase the number of partitions."
  },
  {
    id: 13,
    section: "Section B: Infrastructure Architecture & Troubleshooting",
    title: "Data Lake Performance",
    scenario: "Your query performance on S3 + Athena has degraded significantly. You find that the bucket contains millions of 5KB to 10KB Parquet files.\n\nWhat is the solution?",
    options: [
      { id: "A", text: "Implement a 'Compaction' job to merge small files into larger (128MB+) files." }, // Moved correct answer to A
      { id: "B", text: "Switch to JSON format." },
      { id: "C", text: "Add more partitions." },
      { id: "D", text: "Use GZIP compression." }
    ],
    correctOptionId: "A",
    explanation: "This is the 'Small Files Problem'. Hadoop/Spark/Athena ecosystems suffer high overhead when opening/closing millions of tiny files. The metadata operations (listing files) take longer than reading the data. Compacting them into optimal sizes (e.g., 128MB or 256MB) drastically improves read performance."
  },
  {
    id: 14,
    section: "Section B: Infrastructure Architecture & Troubleshooting",
    title: "Idempotency",
    scenario: "A payment pipeline fails halfway. It is designed to be Idempotent.\n\nWhat is the safe recovery action?",
    options: [
      { id: "A", text: "Manually find the last processed ID and resume from there." },
      { id: "B", text: "Delete the destination table and re-load." },
      { id: "C", text: "Mark the batch as failed and skip it." },
      { id: "D", text: "Re-run the entire batch immediately; it will handle duplicates automatically." } // Moved correct answer to D
    ],
    correctOptionId: "D",
    explanation: "Idempotency means that performing an operation multiple times produces the same result as performing it once. If the pipeline is truly idempotent (e.g., using UPSERTs or de-duplication logic), you can safely re-run the entire batch without creating duplicate records or corruption."
  },
  {
    id: 15,
    section: "Section B: Infrastructure Architecture & Troubleshooting",
    title: "Partitioning Strategy",
    scenario: "You have a table of User Events (300 Million rows). Most queries filter by user_id. The table is currently partitioned by event_date.\n\nWhy is the query performance poor?",
    options: [
      { id: "A", text: "The partition keys are too large." },
      { id: "B", text: "Parquet indexes are broken." },
      { id: "C", text: "Querying by user_id forces a scan of every date partition (Full Table Scan)." }, // Moved correct answer to C
      { id: "D", text: "Date is a bad partition key." }
    ],
    correctOptionId: "C",
    explanation: "Partitioning creates physical directories. If you partition by Date, the folder structure is /date=2023-01-01/. When you query `WHERE user_id = 123`, the database engine does not know which date folder the user is in, so it must open and scan EVERY date folder. This negates the benefit of partitioning."
  },
  {
    id: 16,
    section: "Section B: Infrastructure Architecture & Troubleshooting",
    title: "Workflow Orchestration",
    scenario: "In Airflow, you have a task that aggregates revenue. It must run ONLY if all upstream tasks (Facebook, Google, Shopify data pulls) have finished successfully.\n\nWhich Trigger Rule do you use?",
    options: [
      { id: "A", text: "all_done" },
      { id: "B", text: "all_success (Default)" }, // Moved correct answer to B
      { id: "C", text: "one_success" },
      { id: "D", text: "dummy_trigger" }
    ],
    correctOptionId: "B",
    explanation: "`all_success` is the default and correct rule here. It ensures the downstream task (Revenue Aggregation) waits until ALL parents (Data Pulls) have succeeded. `all_done` would run even if the parents failed."
  },
  {
    id: 17,
    section: "Section B: Infrastructure Architecture & Troubleshooting",
    title: "Attribution Architecture",
    scenario: "Marketing reports that 'Direct' traffic has spiked, but 'Facebook' traffic has dropped. Total orders are stable.\n\nWhat is the infrastructure cause?",
    options: [
      { id: "A", text: "UTM parameters are being stripped by a redirect or privacy blockers (iOS14)." }, // Moved correct answer to A
      { id: "B", text: "Facebook Ads turned off." },
      { id: "C", text: "The database is deleting source data." },
      { id: "D", text: "Users are typing the URL manually." }
    ],
    correctOptionId: "A",
    explanation: "This is a common issue in modern tracking. If a user clicks an ad, but there is a cross-domain redirect (http -> https or www -> non-www) that doesn't persist query parameters, or if iOS privacy features strip tracking IDs, the analytics tool sees the user arriving without a referrer, classifying them as 'Direct'."
  },
  {
    id: 18,
    section: "Section B: Infrastructure Architecture & Troubleshooting",
    title: "Real-Time Dashboard Latency",
    scenario: "A dashboard is powered by a view that joins 3 real-time streams. The dashboard takes 2 minutes to load.\n\nBest architectural fix?",
    options: [
      { id: "A", text: "Add indexes to the stream." },
      { id: "B", text: "Cache the dashboard in the browser." },
      { id: "C", text: "Increase the refresh rate." },
      { id: "D", text: "Pre-aggregate the data into a 'Materialized View' or fast serving layer (e.g., Redis/Clickhouse)." } // Moved correct answer to D
    ],
    correctOptionId: "D",
    explanation: "Joining raw streams on the fly (Read-heavy load) is slow. The standard pattern is CQS (Command Query Separation): Use a stream processor to calculate the join/aggregate as data arrives and write the result to a low-latency store (like Redis, Clickhouse, or a Materialized View). The dashboard then queries this pre-computed result instantly."
  },
  {
    id: 19,
    section: "Section B: Infrastructure Architecture & Troubleshooting",
    title: "Schema Evolution",
    scenario: "Your upstream source (Shopify) adds a new column discount_code_v2. Your pipeline fails because the destination table doesn't have this column.\n\nHow should a robust pipeline handle this?",
    options: [
      { id: "A", text: "Fail and alert engineers (Strict Schema)." },
      { id: "B", text: "Ignore the new column and proceed." },
      { id: "C", text: "Schema Evolution (Auto-detect and add the column)." }, // Moved correct answer to C
      { id: "D", text: "Drop the table and recreate it." }
    ],
    correctOptionId: "C",
    explanation: "In modern ELT/ETL pipelines (like Delta Lake or Snowflake), Schema Evolution is preferred for non-breaking changes (like adding a column). It allows the pipeline to adapt to upstream changes automatically without causing downtime or requiring manual engineer intervention at 3 AM."
  },
  {
    id: 20,
    section: "Section B: Infrastructure Architecture & Troubleshooting",
    title: "Scaling Strategy",
    scenario: "A Black Friday spike is predicted to be 10x normal load.\n\nWhich scaling strategy is most resilient?",
    options: [
      { id: "A", text: "Vertical Scaling (Upgrade DB to largest instance)." },
      { id: "B", text: "Horizontal Scaling (Auto-scaling groups) + Decoupling with Queues (SQS/Kafka) to absorb pressure." }, // Kept at B
      { id: "C", text: "Over-provisioning hardware by 20x." },
      { id: "D", text: "Rate limiting users." }
    ],
    correctOptionId: "B",
    explanation: "Vertical scaling has a hard limit. The most resilient architecture combines Horizontal Scaling (adding more servers) with Asynchronous Decoupling. Queues act as shock absorbers, holding requests until workers can process them, preventing the database from being overwhelmed during the spike."
  }
];